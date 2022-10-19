import {ButtonWrapper} from "./styled";

export const PrimaryButton = ({children, ...props}) => {
  return (
    <ButtonWrapper {...props}>
      {children}
    </ButtonWrapper>
  )
}
