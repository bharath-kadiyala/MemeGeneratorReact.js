import {Component} from 'react'

import {
  BgMainCon,
  MemeGeneratorCon,
  Title,
  LabelText,
  InputSty,
  SelectSty,
  Button,
  DisplayImgCon,
  MemeText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    fontSizeInput: fontSizesOptionsList[0].displayText,
    memeDetails: {
      imageUrl: '',
      topText: '',
      bottomText: '',
      fontSize: '',
    },
  }

  onChangeImageUrlInput = event => {
    this.setState({imageUrlInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSizeInput: event.target.value})
  }

  submitDetails = event => {
    event.preventDefault()

    const {
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      fontSizeInput,
    } = this.state

    this.setState({
      memeDetails: {
        imageUrl: imageUrlInput,
        topText: topTextInput,
        bottomText: bottomTextInput,
        fontSize: `${fontSizeInput}px`,
      },
    })
  }

  render() {
    const {
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      fontSizeInput,
      memeDetails,
    } = this.state
    const {imageUrl, topText, bottomText, fontSize} = memeDetails
    return (
      <BgMainCon>
        <MemeGeneratorCon onSubmit={this.submitDetails}>
          <Title>Meme Generator</Title>
          <LabelText htmlFor="imageUrl">Image URL</LabelText>
          <InputSty
            type="text"
            id="imageUrl"
            value={imageUrlInput}
            placeholder="Enter the Image URL"
            onChange={this.onChangeImageUrlInput}
          />

          <LabelText htmlFor="topText">Top Text</LabelText>
          <InputSty
            value={topTextInput}
            type="text"
            id="topText"
            placeholder="Enter the Top Text"
            onChange={this.onChangeTopText}
          />

          <LabelText htmlFor="bottomText">Bottom Text</LabelText>
          <InputSty
            value={bottomTextInput}
            type="text"
            id="bottomText"
            placeholder="Enter the Bottom Text"
            onChange={this.onChangeBottomText}
          />

          <LabelText htmlFor="fontSize">Font Size</LabelText>
          <SelectSty
            id="fontSize"
            value={fontSizeInput}
            onChange={this.onChangeFontSize}
          >
            {fontSizesOptionsList.map(each => (
              <option value={each.optionId} key={each.optionId}>
                {each.displayText}
              </option>
            ))}
          </SelectSty>

          <Button>Generate</Button>
        </MemeGeneratorCon>

        <DisplayImgCon data-testid="meme" imageUrl={imageUrl}>
          <MemeText fontSize={fontSize}>{topText}</MemeText>
          <MemeText fontSize={fontSize}>{bottomText}</MemeText>
        </DisplayImgCon>
      </BgMainCon>
    )
  }
}

export default MemeGenerator
