import argparse
import time
from scipy.fft import fft, fftfreq
from brainflow.board_shim import BoardShim, BrainFlowInputParams, BoardIds, BrainFlowPresets
from brainflow.data_filter import DataFilter, FilterTypes, DetrendOperations, WindowOperations
from brainflow.ml_model import MLModel, BrainFlowMetrics, BrainFlowClassifiers, BrainFlowModelParams
import matplotlib.pyplot as plt
import numpy as np

def read_board_data(data, sample_rate):
    front_channels = [1, 2]
    for channel in front_channels:
        channel_data = data[channel]
        nfft = DataFilter.get_nearest_power_of_two(sample_rate)
        psd = DataFilter.get_psd_welch(channel_data, nfft, nfft // 2, sample_rate,
                                   WindowOperations.BLACKMAN_HARRIS.value)

        band_power_alpha = DataFilter.get_band_power(psd, 7.5, 12.5)
        band_power_beta = DataFilter.get_band_power(psd, 12.5, 30.0)
        print(band_power_alpha, band_power_beta)

def main():
    BoardShim.enable_dev_board_logger()

    parser = argparse.ArgumentParser()
    # use docs to check which parameters are required for specific board, e.g. for Cyton - set serial port
    parser.add_argument('--timeout', type=int, help='timeout for device discovery or connection', required=False,
                        default=0)
    parser.add_argument('--ip-port', type=int, help='ip port', required=False, default=0)
    parser.add_argument('--ip-protocol', type=int, help='ip protocol, check IpProtocolType enum', required=False,
                        default=0)
    parser.add_argument('--ip-address', type=str, help='ip address', required=False, default='')
    parser.add_argument('--serial-port', type=str, help='serial port', required=False, default='')
    parser.add_argument('--mac-address', type=str, help='mac address', required=False, default='')
    parser.add_argument('--other-info', type=str, help='other info', required=False, default='')
    parser.add_argument('--serial-number', type=str, help='serial number', required=False, default='')
    parser.add_argument('--board-id', type=int, help='board id, check docs to get a list of supported boards',
                        required=True)
    parser.add_argument('--file', type=str, help='file', required=False, default='')
    parser.add_argument('--master-board', type=int, help='master board id for streaming and playback boards',
                        required=False, default=BoardIds.NO_BOARD)
    args = parser.parse_args()

    params = BrainFlowInputParams()
    params.ip_port = args.ip_port
    params.serial_port = args.serial_port
    params.mac_address = args.mac_address
    params.other_info = args.other_info
    params.serial_number = args.serial_number
    params.ip_address = args.ip_address
    params.ip_protocol = args.ip_protocol
    params.timeout = args.timeout
    params.file = args.file
    params.master_board = args.master_board

    board = BoardShim(args.board_id, params)
    board.prepare_session()
    board.start_stream ()
    # data = board.get_current_board_data (256) # get latest 256 packages or less, doesnt remove them from internal buffer

    eeg_channels = [1,2,3,4,5,6,7,8]
    model_params = BrainFlowModelParams(BrainFlowMetrics.MINDFULNESS.value,
                                        BrainFlowClassifiers.DEFAULT_CLASSIFIER.value)
    model = MLModel(model_params)
    model.prepare()
    time.sleep(4)
    while True:
        data = board.get_board_data()
        sampling_rate = board.get_sampling_rate(args.board_id)
        band_avgs = DataFilter.get_avg_band_powers(data, eeg_channels, sampling_rate, True)[0]
        prediction = model.predict(band_avgs)
        print (prediction)
        time.sleep(1)

    model.release()
    board.stop_stream()
    board.release_session()


if __name__ == "__main__":
    main()