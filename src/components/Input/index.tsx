import React, { FC, InputHTMLAttributes, useRef } from 'react'

import { Container, Content, TitleInput, ErrorCaption } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string
  defaultValue?: any
  width?: string
  error?: boolean
  errorMessage?: string,
  icon?: any
  optional?: any
}

const Input: FC<InputProps> = ({
  title,
  error,
  errorMessage,
  icon,
  width,
  optional,
  defaultValue,
  ...rest
}) => {
  const inputRef = useRef(null)

  const inputWidth = width ? width : '100%'

  return (
    <Container style={{ width: inputWidth }}>
      {title && (
        <TitleInput>
          <p>{title}</p>
          {optional && <small>(opcional)</small>}
        </TitleInput>
      )}
      <Content isErrored={!!error}>
        {icon && (
          <>
            <img src={icon} alt="Input Icon"
              style={{
                maxWidth: '100%',
                height: 'auto'
              }}
            />
          </>
        )}
        <input ref={inputRef} value={defaultValue} {...rest} />
      </Content>
      {error && <ErrorCaption>{errorMessage}</ErrorCaption>}
    </Container>
  )
}

export default Input
