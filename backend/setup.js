const {
    BoardIds,
    BoardShim,
    BrainFlowClassifiers,
    BrainFlowMetrics,
    DataFilter,
    MLModel,
    WindowFunctions
  } = require('brainflow');

const boardId = BoardIds.CYTON_BOARD
const board = new BoardShim(boardId, {
  serialPort: "COM3"
})

board.prepareSession()
board.startStream()


const model = new MLModel (BrainFlowMetrics.MINDFULNESS, BrainFlowClassifiers.DEFAULT_CLASSIFIER, {});
model.prepare();

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

async function main() {
    for (i = 0; i < 10000; i++) {
        console.log(i)
    }

    while (true) {
        try {
    const data = board.getCurrentBoardData(250 * 3);
    const eegChannels = BoardShim.getEegChannels(boardId);
    const samplingRate = BoardShim.getSamplingRate(boardId);
    const bands = DataFilter.getAvgBandPowers(data, eegChannels, samplingRate, true);

    const psd = DataFilter.getPsd(data[0], samplingRate, 3)
    const gammaPower = DataFilter.getBandPower(psd, 40, 100)
    
    const focusValue = model.predict(bands[0])[0];
    console.log(focusValue)
        }catch {}
    }
}

main()