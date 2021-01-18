import React, { memo } from 'react'
import { Select } from 'antd'

const { Option } = Select

interface IProps {
  locale: string
  updateLocale: (locale: string) => void
}

const LocaleSelect: React.FC<IProps> = props => {
  const { locale, updateLocale } = props
  return (
    <Select
      className='locale-switch'
      defaultValue={locale}
      style={{ width: 90 }}
      bordered={false}
      onChange={val => updateLocale(val)}
    >
      <Option value='en-us'>English</Option>
      <Option value='zh-cn'>中文</Option>
    </Select>
  )
}

export default memo(LocaleSelect)
