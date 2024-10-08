import { Container } from "./styles";

import { GrAdd } from "react-icons/gr";
import { GrClose } from "react-icons/gr";

export function MovieItem({isNew, value,  ...rest}) {
  return(
    <Container $isNew={isNew}>
      <input 
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      />

    <button
      type="button"
    >
      {isNew ? <GrAdd /> : <GrClose />}
    </button>

    </Container>
  )
}