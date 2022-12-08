import React, { FC, useState } from 'react'
import {
  DropDownList,
  ListItem,
  Main,
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer
} from './styles'

type Props = {
  data: string[],
  type: string,
  title: string,
  dispatchFilter: (type: string, value: string) => void
}

const DropDownMenu: FC<Props> = (props: Props) => {
  const [optionSelected, setOptionSelected] = useState('')

  const [isOpen, setIsOpen] = useState(false)

  const toggling = () => setIsOpen(!isOpen)

  const onOptionClicked = (values: string) => () => {
    props.dispatchFilter(props.type, values)
    setOptionSelected(values)
    setIsOpen(false)
  }

  return (
    <>
      <Main onClick={toggling}>
        <DropDownContainer>
          <DropDownHeader>
            {optionSelected || props.title}
          </DropDownHeader>
          {isOpen && (
            <DropDownListContainer>
              <DropDownList>
                {props.data.map(option => (
                  <ListItem onClick={onOptionClicked(option)} key={option}>
                    {option}
                  </ListItem>
                ))}
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropDownContainer>
      </Main>
    </>
  )
}
export default DropDownMenu
