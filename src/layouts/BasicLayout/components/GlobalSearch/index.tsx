import React, { useState, useRef } from 'react'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import './index.scss'

interface IProps {
  prefixCls?: string
  placeholder: string
}

const GlobalSearch: React.FC<IProps> = props => {
  const { placeholder, prefixCls = 'global-search' } = props

  const [inputFocus, setInputFocus] = useState(false)
  const inputReference = useRef<any>(null)

  const onSearchWrapClick = () => {
    setInputFocus(true)
    inputReference.current!.focus({ cursor: 'start' })
  }

  const onSearchInputBlur = () => setInputFocus(false)

  return (
    <div className={`${prefixCls}`} onClick={onSearchWrapClick} aria-hidden='true'>
      <Input
        className={`${prefixCls}-input`}
        placeholder={placeholder}
        allowClear
        ref={inputReference}
        prefix={<SearchOutlined />}
        onBlur={onSearchInputBlur}
      />
      {!inputFocus && (
        <div className={`${prefixCls}-shadow`}>
          <SearchOutlined />
          <span className={`${prefixCls}-shadow-text`}>{placeholder}</span>
        </div>
      )}
    </div>
  )
}

export default GlobalSearch
