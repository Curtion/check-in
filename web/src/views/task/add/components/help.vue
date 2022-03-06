<template>
  <n-list bordered>
    <n-list-item>
      <n-thing title="请求参数">
        <p>
          该参数只有在请求方式为POST或PUT时才有效，可以是键值对字符串或者json格式的字符串。
        </p>
      </n-thing>
    </n-list-item>
    <n-list-item>
      <n-thing title="Header">
        <p>
          设置HTTP请求头，详情查看：<a
            href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers"
            target="_blank"
          >
            HTTP Headers
          </a>
        </p>
      </n-thing>
    </n-list-item>
    <n-list-item>
      <n-thing title="Cookie">
        <p>
          Cookie作为请求头的一种，一般情况下它用来做账号校验，因为常用所以单独作为选项列出来。
        </p>
      </n-thing>
    </n-list-item>
    <n-list-item>
      <n-thing title="代理设置">
        <p>HTTP代理请求，如果你不知道此项有什么用处，那么就不应该填写它。</p>
      </n-thing>
    </n-list-item>
  </n-list>
</template>
