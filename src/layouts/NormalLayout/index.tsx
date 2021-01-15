import React, { useState } from 'react'
import { injectIntl, IntlContextProps } from '@/hocs/intlContext/index'
import { LocaleSelect } from '@/components'
import './index.scss'

interface IProps {
  prefixCls?: string
  intl: IntlContextProps
}

const NormalLayout: React.FC<IProps> = props => {
  const { prefixCls = 'normal-layout', intl, children } = props
  const [locale] = useState('en-us')

  const renderFooter = () => (
    <footer className={`${prefixCls}-footer`}>
      <div className='footer-container'>
        <LocaleSelect locale={locale} updateLocale={val => intl.updateLocale(val)} />
        <div className='copyright'>{intl.formatMessage({ id: 'basicLayout_copyright' })}</div>
      </div>
    </footer>
  )
  return (
    <div className={`${prefixCls}`}>
      <main className={`${prefixCls}-main`}>{children}</main>
      {renderFooter()}
    </div>
  )
}

export default injectIntl(NormalLayout)
