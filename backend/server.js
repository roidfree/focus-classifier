const express = require('express')
const cors = require('cors') 

const {
  BoardIds,
  BoardShim,
  BrainFlowClassifiers,
  BrainFlowMetrics,
  DataFilter,
  MLModel,
  WindowFunctions
} = require('brainflow');

const app = express()
app.use(cors())

const port = 3000;


`
const boardId = BoardIds.CYTON_BOARD
const board = new BoardShim(boardId, {
  serialPort: "COM3"
})

board.prepareSession()
board.startStream()

const model = new MLModel (BrainFlowMetrics.MINDFULNESS, BrainFlowClassifiers.DEFAULT_CLASSIFIER, {});
model.prepare();
`


const calculateFocus = () => {
  const data = board.getCurrentBoardData(250);
    const eegChannels = BoardShim.getEegChannels(boardId);
    const samplingRate = BoardShim.getSamplingRate(boardId);
    const bands = DataFilter.getAvgBandPowers(data, eegChannels, samplingRate, true);
    const focusValue = model.predict(bands[0])[0];

    const customBands = DataFilter.getCustomBandPowers(data, [[0, 4], [4, 8], [8, 12], [12, 40], [40, 100]], eegChannels, samplingRate, true)[0]
    console.log(customBands[0] + customBands[1] + customBands[2], customBands[3] + customBands[4])
    return focusValue
}

app.get('/get-focus', (req, res) => {
    

    // const focusValue = calculateFocus()
    res.send(`${Math.random()}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})