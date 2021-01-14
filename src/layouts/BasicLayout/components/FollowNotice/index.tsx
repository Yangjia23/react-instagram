import React from 'react'

interface INoticeProps {
  id: number
  title: string
  message: string
}

interface IFollowNoticeProps {
  emptyMsg: string
  notices?: INoticeProps[]
}

const FollowNotice: React.FC<IFollowNoticeProps> = props => {
  const { emptyMsg, notices } = props
  const prefixCls = 'follow-notice'

  return notices?.length ? (
    <>
      {notices.map(notice => (
        <div key={notice.id} className={`${prefixCls}-item`} role='presentation'>
          <div className={`${prefixCls}-item-title`}>{notice.title}</div>
          <div className={`${prefixCls}-item-message`}>{notice.message}</div>
        </div>
      ))}
    </>
  ) : (
    <div className={`${prefixCls}-empty`}>{emptyMsg}</div>
  )
}

export default FollowNotice
