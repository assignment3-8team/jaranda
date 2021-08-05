import Modal from "../components/Modal"
import { useState } from "react"
export const useModal = (props) => {
  const [ isOpen, setIsopen ] = useState(false)

  const close = () => {
    setIsopen(false)
  }

  const show = () => {
    setIsopen(true)
  }

  const modalView = (component) => (
    <Modal show={isOpen} width={props?.width || "auto"} height={props?.height || "auto"} close={close}>
      {component}
    </Modal>
  )

  return [
    show,
    close,
    modalView
    ]

}