const About = () => {
  return (
    <div className="bg-violet-100 dark:bg-black text-black dark:text-white">
	<div className="container sm:w-1/2  px-10 py-6 mx-auto rounded-lg shadow-sm  dark:bg-black">
		<div className="flex items-center justify-between">
			<span className="text-sm text-gray-400 dark:text-gray-600">Hi Everyone..!</span>
			<a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded bg-green-400 dark:bg-green-600 text-gray-900 dark:text-gray-50">About Me</a>
		</div>
		<div className="mt-3">
			<a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">I'm RAMANA S - DCE ., B.TECH</a>
			<p className="mt-2">I'm an individual who seeks to explore and expand their knowledge. Always eager to learn and grow, I'm dedicated to improving their skills and understanding in various fields. Whether diving into new technologies, enhancing personal development, or staying updated with the latest trends, Ramana consistently strives for excellence and self-improvement.</p>
		</div>
		<div className="flex items-center justify-between mt-4">
			<a rel="noopener noreferrer" href="#" className="hover:underline text-green-400 dark:text-green-600">Read more</a>
			{/* <div>
				<a rel="noopener noreferrer" href="#" className="flex items-center">
					<img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full bg-gray-500 dark:bg-gray-500" />
					<span className="hover:underline text-gray-400 dark:text-gray-600">Leroy Jenkins</span>
				</a>
			</div> */}
		</div>
	</div>
</div> 
  )
}

export default About
