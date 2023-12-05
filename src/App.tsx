/*
 * @Author: DESKTOP-LRKIFMR\UI1 209315540@qq.com
 * @Date: 2023-11-30 16:21:11
 * @LastEditors: DESKTOP-LRKIFMR\UI1 209315540@qq.com
 * @LastEditTime: 2023-12-05 10:59:49
 * @FilePath: \ScreenMediaMobiled:\project\yui\src\App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'

import BasicButton from './components/button/demo/basic'
import SizeButton from './components/button/demo/size'
import LoadingButton from './components/button/demo/loading'
import GhostButton from './components/button/demo/ghost'
import BlockButton from './components/button/demo/block'
import IconButton from './components/button/demo/icon'
import DisabledButton from './components/button/demo/disabled'

import './App.css'
const App: React.FC = () => (
  <div>
    <BasicButton />
    <SizeButton />
    <LoadingButton />
    <div className="bg">
      <GhostButton />
    </div>
    <BlockButton />
    <IconButton />
    <DisabledButton />
  </div>
)

export default App