import {ButtonWrapper} from "./styled";

export const PrimaryButton = ({children, href, ...props}) => {
  return (
    <ButtonWrapper {...props} href={'mailto:sales@ifortex.com'}>
      {children}
    </ButtonWrapper>
  )
}
