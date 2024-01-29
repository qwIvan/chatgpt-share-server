import{_ as e,r as t,o as c,c as i,b as n,d as s,e as p,a as l}from"./app-eb8d0uPG.js";const o="/assets/notice1-U7IuKWIa.png",r="/assets/notice2-umTyfMe7.png",u={},d=n("h1",{id:"选车页面",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#选车页面","aria-hidden":"true"},"#"),s(" 选车页面")],-1),h=n("p",null,"选车页面(list)是一个列表页面,用于在用户登陆前以及登陆后选车使用。",-1),m={href:"https://github.com/Hanwencc/car-list",target:"_blank",rel:"noopener noreferrer"},k=l(`<h2 id="自定义替换选车页面" tabindex="-1"><a class="header-anchor" href="#自定义替换选车页面" aria-hidden="true">#</a> 自定义替换选车页面</h2><p>将任意编译后的静态页面放置在<code>chatgpt-share/list</code>目录下.</p><p>然后修改<code>docker-compose.yml</code>,增加 list 到 volumes 中,例如:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>  <span class="token key atrule">chatgpt-share-server</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> xyhelper/chatgpt<span class="token punctuation">-</span>share<span class="token punctuation">-</span>server<span class="token punctuation">:</span>latest
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8300<span class="token punctuation">:</span><span class="token number">8001</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> Asia/Shanghai <span class="token comment"># 指定时区</span>
      <span class="token comment"># 接入网关地址</span>
      <span class="token key atrule">CHATPROXY</span><span class="token punctuation">:</span> <span class="token string">&quot;https://demo.xyhelper.cn&quot;</span>
      <span class="token comment"># 接入网关的authkey</span>
      <span class="token key atrule">AUTHKEY</span><span class="token punctuation">:</span> <span class="token string">&quot;xyhelper&quot;</span>
      <span class="token comment"># 内容审核及速率限制</span>
      <span class="token key atrule">AUDIT_LIMIT_URL</span><span class="token punctuation">:</span> <span class="token string">&quot;http://auditlimit:8080/audit_limit&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./config.yaml<span class="token punctuation">:</span>/app/config.yaml
      <span class="token punctuation">-</span> ./data/chatgpt<span class="token punctuation">-</span>share<span class="token punctuation">-</span>server/<span class="token punctuation">:</span>/app/data/
      <span class="token punctuation">-</span> ./list<span class="token punctuation">:</span>/app/resource/public/list  <span class="token comment"># 这里增加了list~~~~~~~~~~~~~</span>
    <span class="token key atrule">labels</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;com.centurylinklabs.watchtower.scope=xyhelper-chatgpt-share-server&quot;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>选车页面可以用你喜欢的任意前端框架编写,只要编译后的静态页面放置在<code>chatgpt-share/list</code>目录下即可.</p><p>首页的文件名必须为<code>index.html</code>.</p><p>路由模式必须为<code>hash</code>模式.</p></div><h2 id="公告配置" tabindex="-1"><a class="header-anchor" href="#公告配置" aria-hidden="true">#</a> 公告配置</h2><p>在管理后台-系统设置-参数配置-参数列表中新增参数<code>notice</code>，值为公告内容，支持 html 标签，如下图所示： <img src="`+o+'" alt="公告配置1"><img src="'+r+'" alt="公告配置2"></p><h2 id="选车页面的数据源" tabindex="-1"><a class="header-anchor" href="#选车页面的数据源" aria-hidden="true">#</a> 选车页面的数据源</h2><p>TODO: 选车页面的数据源</p>',9);function v(b,g){const a=t("ExternalLinkIcon");return c(),i("div",null,[d,h,n("p",null,[s("默认集成的选车页面源码在 github 上的地址为: "),n("a",m,[s("https://github.com/Hanwencc/car-list"),p(a)])]),k])}const y=e(u,[["render",v],["__file","list.html.vue"]]);export{y as default};
