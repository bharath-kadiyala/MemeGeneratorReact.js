import styled from 'styled-components'

export const BgMainCon = styled.div`
  padding: 5% 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const MemeGeneratorCon = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  padding: 0px;
`
export const Title = styled.h1`
  font-family: 'Open Sans';
  font-size: 36px;
  color: #35469c;
  margin-bottom: 20px;
`
export const LabelText = styled.label`
  font-family: 'Open Sans';
  font-size: 13px;
  color: #5a7184;
  font-weight: 600;
  margin-bottom: 8px;
`
export const InputSty = styled.input`
  font-family: 'Open Sans';
  padding: 10px 15px 10px 15px;
  outline: none;
  border: 2px solid #d7dfe9;
  font-size: 13px;
  color: #7e858e;
  border-radius: 5px;
  margin-bottom: 25px;
`
export const SelectSty = styled.select`
  color: #1e293b;
  margin-bottom: 15px;
  border-radius: 5px;
  font-family: 'Open Sans';
  padding: 10px 15px 10px 15px;
  outline: none;
  border: 2px solid #d7dfe9;
  font-size: 13px;
`

export const Button = styled.button`
  height: 40px;
  width: 120px;
  background-color: #0b69ff;
  color: #ffff;
  font-weight: 600;
  font-family: 'Open Sans';
  font-size: 14px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`
export const DisplayImgCon = styled.div`
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px;
  width: 500px;
  height: 300px;
  margin-left: 10%;
`
export const MemeText = styled.p`
  font-family: 'Open Sans';
  font-size: ${props => props.fontSize};
  color: #ffff;
  text-align: center;
`
