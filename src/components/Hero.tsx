import pic from '../assets/mypic.jpg'
const Hero = () => {
  return (
    <section className="bg-violet-100 dark:bg-black text-black dark:text-white">
	<div className="container flex flex-col justify-center p-1 mx-auto sm:py-10 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-4xl font-bold leading-none sm:text-5xl">I'm RAMANA <br/>
				<span className="text-green-600 dark:text-green-600">MERN</span> STACK DEVELOPER
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">I’m currently learning to make Full Stack Projects..! 
				<br  className="hidden md:inline lg:hidden" />
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-green-600 dark:bg-green-600 text-gray-900 dark:text-gray-50">Download CV</a>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded border-gray-100 dark:border-gray-800">Learn More</a>
			</div>
		</div>
		<div className="flex items-center justify-center p-20 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={pic} alt="" className="object-contain rounded h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>
  )
}

export default Hero