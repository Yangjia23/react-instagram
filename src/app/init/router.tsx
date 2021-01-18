import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import AclRouter from 'react-acl-router'
import { History } from 'history'

import { MultiIntlProvider } from '@/hocs/intlContext'
import BasicLayout from '@/layouts/BasicLayout'
import NormalLayout from '@/layouts/NormalLayout'
import NotFound from '@/views/NotFound'

import { useSelector } from 'react-redux'
import { authorizedRoutes, normalRoutes } from '../config/routes'
import { messageMap, buildConfig } from '../config/buildConfig'
import { selectUser } from '../appSlice'

interface IProps {
  history: History
}

const Router: React.FC<IProps> = props => {
  const { history } = props
  const user = useSelector(selectUser)

  return (
    <ConnectedRouter history={history}>
      <MultiIntlProvider defaultLocale={buildConfig.locale} messageMap={messageMap}>
        <AclRouter
          authorities={user.authorities}
          authorizedRoutes={authorizedRoutes}
          authorizedLayout={BasicLayout}
          normalRoutes={normalRoutes}
          normalLayout={NormalLayout}
          notFound={NotFound}
        />
      </MultiIntlProvider>
    </ConnectedRouter>
  )
}

export default Router
