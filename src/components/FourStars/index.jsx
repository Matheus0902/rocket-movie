import { Container } from "./styles";
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";

export function FourStars() {
  return(
    <Container>
      <IoIosStar />
      <IoIosStar />
      <IoIosStar />
      <IoIosStar />
      <IoIosStarOutline />
    </Container>
  )
}