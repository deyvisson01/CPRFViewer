import React, { FC, useEffect } from 'react'

import { Content } from './styles'

type Props = {
  children: JSX.Element
  maxWidth?: string
  maxHeight?: string
  width?: string
  height?: string
  playerHeight?: string
  disableOverflow?: boolean
  title?: string
  subtitle?: string
  wrapper?: boolean
  onClose: () => void
}

const Modal: FC<Props> = ({
  maxWidth,
  maxHeight,
  wrapper = true,
  onClose,
  width,
  height,
  children,
  title,
  subtitle,
  playerHeight,
  disableOverflow = false
}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  })
  return (
    <Content
      width={width}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      playerHeight={playerHeight}
      height={height}
      disableOverflow={disableOverflow}
    >
      <div className="wrapper-modal" onClick={() => wrapper && onClose()}>
        <div className="modal" onClick={e => e.stopPropagation()}>
          <div className="title-modal">
            <div>
              <span>{title}</span>
              {subtitle && <small>{subtitle}</small>}
            </div>
            <button onClick={onClose} className="close-button">
              X
            </button>
          </div>
          <div className={`content-modal`}>
            {React.cloneElement(children, { onClose })}
          </div>
        </div>
      </div>
    </Content>
  )
}

export default Modal
