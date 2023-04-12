import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto my-5'>
            
<section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
		<p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
		<div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">what is useRef??</summary>
				<div className="px-4 pb-4">
					<p>useRef is a React hook that allows us to create a reference to an element in the DOM and persist it across renders. It can be used to access or modify the properties or methods of DOM elements directly. It's commonly used for focusing input fields, playing and pausing videos, or triggering animations imperatively.</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">What is Custom Hook?</summary>
				<div className="px-4 pb-4">
					<p>A custom hook in React is a reusable function that allows us to extract and share stateful logic between components. It's a way to use React hooks to create functions that can be used across different components, similar to how you use built-in hooks like useState.</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">When Do we Use Context API?</summary>
				<div className="px-4 pb-4 space-y-2">
					<p>We should use the Context API in React when we need to pass data down from a parent component to multiple levels of child components without having to pass props through each level. Common scenarios include theme customization, user authentication, language localization, and global state management.</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">What is useMemo?</summary>
				<div className="px-4 pb-4 space-y-2">
					<p>useMemo is a React hook that memoizes a function and its return value, and only recomputes it when the inputs change. It can be used to optimize expensive calculations or computations by caching the result and returning it from cache if the input values are the same. This can significantly improve the performance of a React application by reducing unnecessary re-renders.</p>
				</div>
			</details>
		</div>
	</div>
</section>

        </div>
    );
};

export default Blog;