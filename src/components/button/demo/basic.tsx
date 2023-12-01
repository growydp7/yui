/*
 * @Author: DESKTOP-LRKIFMR\UI1 209315540@qq.com
 * @Date: 2023-11-30 17:23:41
 * @LastEditors: DESKTOP-LRKIFMR\UI1 209315540@qq.com
 * @LastEditTime: 2023-11-30 17:29:42
 * @FilePath: \ScreenMediaMobiled:\project\yui\src\components\button\demo\basic.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import Button from '../index'

const App: React.FC = () => (
  <div>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </div>
)

export default App