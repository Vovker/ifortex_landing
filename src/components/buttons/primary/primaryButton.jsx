import {ButtonWrapper} from "./styled";

export const PrimaryButton = ({children, ...props}) => {
  return (
    <ButtonWrapper {...props} href={'mailto:sales@ifortex.com'}>
      {children}
    </ButtonWrapper>
  )
}
