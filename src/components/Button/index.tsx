import React, { FC } from 'react'

import loadingIcon from '../../assets/load.svg'
import { Container } from './styles'

type Props = {
  background?: any
  type?: string
  disabled?: boolean
  children: string
  loading?: boolean
  onClick?: () => void
}

const Button: FC<Props> = ({
  background,
  type,
  disabled,
  children,
  loading,
  onClick
}) => {
  const isLoading = loading
  const isDisabled = loading || disabled

  return (
    <>
      <Container background={background}>
        <button
          disabled={isDisabled}
          onClick={onClick}
          className={`${type} ${disabled ? ' disabled' : ''}`}
        >
          {isLoading ? (
            <>
              <img src={loadingIcon} alt="Loading Icon"
                style={{
                  maxWidth: '100%',
                  height: 'auto'
                }}/>
            </>
          ) : (
            children
          )}
        </button>
      </Container>
    </>
  )
}

export default Button
