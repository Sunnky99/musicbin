// 修改后：同时匹配 .md 和 .mdx 文件
const contentModules = import.meta.glob("./posts/content/*.md*"); 
const issueModules = import.meta.glob("./posts/issue/*.md*");
/* 
Glob Import是vite的一个特性，vite支持从文件系统通过import.meta.glob函数输入多个模块
如const contentModules = import.meta.glob('./dir/*.js')
它也可以被转换成
const contentModules = {
  './dir/bar.js': () => import('./dir/bar.js'),
  './dir/foo.js': () => import('./dir/foo.js'),
}

所以这里可以被转换成
const contentModules = {
  './posts/dungeon-playlist.md': () => import('./posts/dungeon-playlist.md'),
  './posts/love-album.md': () => import('./posts/love-album.md'),
}

import.meta.glob函数还有其他参数，可以通过import options选择只传入contentModules的一部分，import: "default" 表示：自动取导入模块的 default 导出。
query option提供请求来输入，query: '?raw'就是将输入设置为字符串。
*/
export async function getPosts() {
    const posts = [];

/* 可以通过遍历contentModules对象里的键来获取对应的contentModules 
for (const path in contentModules) {
  contentModules[path]().then((mod) => {
    console.log(path, mod)
  })
}

*/
    for (const path in contentModules) {
        const mod = await contentModules[path]();
/* 

这里是读取了contentModules里的path键，执行了它的值函数。返回异步函数，这里异步函数返回一个在react编译阶段就已经编译好的js对象，也就是mod


mod 现在是一个包含所有导出的对象,返回：


{
  default: function MDXContent() { ... }, // 文章正文组件
  frontmatter: {  // 插件自动生成的对象
    title: "我的第一篇 MDX 博客",
    date: "2026-06-25",
    tags: ["React", "MDX"]
  }
}

*/
       const attributes = mod.frontmatter || {};
//解构赋值front-matter里的属性和内容
        posts.push({
            slug: path
                .split("/")
                .pop()
                .replace(/\.mdx?$/, ""),
            ...attributes,
        });
        //添加对象为数组元素到posts数组中，数组内slug的值为处理后的path字符串
    }

    return posts.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );
}

export async function getPost(slug) {
const path = Object.keys(contentModules).find(
        (p) => p.split("/").pop().replace(/\.mdx?$/, "") === slug
    );
    if (!contentModules[path]) return null;

    const mod = await contentModules[path]();
    
    return {
        slug,
        ...mod.frontmatter,       // 元数据
        Component: mod.default    // MDX 编译出来的 React 组件
    };
}

export async function getIssuePost(slug) {
    const path = Object.keys(issueModules).find(
        (p) => p.split("/").pop().replace(/\.mdx?$/, "") === slug
    );
if (!issueModules[path]) return null;

    const mod = await issueModules[path]();
    
    return {
        slug,
        ...mod.frontmatter,       // 元数据
        Component: mod.default    // MDX 编译出来的 React 组件
    };
}