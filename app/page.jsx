import Feed from "@components/feed"

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
        <h1 className='head_text text-center'>
            Discover & Share
            <br className='max-md:hidden'/>
            <span className='orange_gradient'>
                AI-Powered Prompts
            </span>
            <p className='desc text-center'>
                AI Prompt is an open-source AI prompting tool for modern world to discover, create and share creative prompts
            </p>
        </h1>
        <Feed/>
    </section>
  )
}

export default Home
