/*
 * @Author: DESKTOP-LRKIFMR\UI1 209315540@qq.com
 * @Date: 2023-12-05 10:56:22
 * @LastEditors: DESKTOP-LRKIFMR\UI1 209315540@qq.com
 * @LastEditTime: 2023-12-05 11:03:25
 * @FilePath: \ScreenMediaMobiled:\project\yui\src\components\button\demo\disabled.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import Button from '../index'
import '../../../App.css'

const App: React.FC = () => (
  <div>
    <div>
      <Button type="primary">Primary</Button>
      <Button type="primary" disabled>
        Primary(disabled)
      </Button>
    </div>
    <div>
      <Button>Default</Button>
      <Button disabled>Default(disabled)</Button>
    </div>
    <div>
      <Button type="dashed">Dashed</Button>
      <Button type="dashed" disabled>
        Dashed(disabled)
      </Button>
    </div>
    <div>
      <Button type="text">Text</Button>
      <Button type="text" disabled>
        Text(disabled)
      </Button>
    </div>
    <div>
      <Button type="link">Link</Button>
      <Button type="link" disabled>
        Link(disabled)
      </Button>
    </div>
    <div>
      <Button type="primary" href='https://ant.design/index-cn'>
        Href Primary
      </Button>
      <Button type="primary" href='https://ant.design/index-cn' disabled>
        Href Primary(disabled)
      </Button>
    </div>
    <div>
      <Button danger>Danger Default</Button>
      <Button danger disabled>
        Danger Default(disabled)
      </Button>
    </div>
    <div>
      <Button danger type="text">
        Danger Text
      </Button>
      <Button danger type="text" disabled>
        Danger Text(disabled)
      </Button>
    </div>
    <div>
      <Button type="link" danger>
        Danger Link
      </Button>
      <Button type="link" danger disabled>
        Danger Link(disabled)
      </Button>
    </div>
    <div className='bg'>
      <Button ghost>Ghost</Button>
      <Button ghost disabled>
        Ghost(disabled)
      </Button>
    </div>
  </div>
)

export default App