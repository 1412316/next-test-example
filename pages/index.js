import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
          <div class="fb-like" data-href="https://www.facebook.com/H%C3%B4m-nay-l%C3%A0-m%E1%BB%99t-ng%C3%A0y-m%E1%BB%9Bi-100207341700762" data-width="" data-layout="button_count" data-action="like" data-size="small" data-share="true"></div>
          <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FH%25C3%25B4m-nay-l%25C3%25A0-m%25E1%25BB%2599t-ng%25C3%25A0y-m%25E1%25BB%259Bi-100207341700762&width=90&layout=button_count&action=like&size=small&share=false&height=21&appId=224405702374158" width="90" height="21" style={{border: "none", overflow: "hidden"}} scrolling="no" frameBorder="0" allowFullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          
          <div class="fb-page" data-href="https://www.facebook.com/H&#xf4;m-nay-l&#xe0;-m&#x1ed9;t-ng&#xe0;y-m&#x1edb;i-100207341700762/" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/H&#xf4;m-nay-l&#xe0;-m&#x1ed9;t-ng&#xe0;y-m&#x1edb;i-100207341700762/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/H&#xf4;m-nay-l&#xe0;-m&#x1ed9;t-ng&#xe0;y-m&#x1edb;i-100207341700762/">Hôm nay là một ngày mới</a></blockquote></div>
          
          <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FH%C3%B4m-nay-l%C3%A0-m%E1%BB%99t-ng%C3%A0y-m%E1%BB%9Bi-100207341700762%2F&tabs=timeline&width=340&height=187&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=224405702374158" width="340" height="187" style={{border: "none", overflow: "hidden" }} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
      {/* <div className="fb-customerchat"
        attribution="setup_tool"
        page_id="100207341700762"
        theme_color="#ff5ca1"
        logged_in_greeting="Chào bạn!"
        logged_out_greeting="Chào bạn!">
      </div> */}
    </div>
  )
}
