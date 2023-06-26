type IconsProp = {
    className: string,
}

export const AnchorIcon = (props: IconsProp) : any => {
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="190" 
    height="190" 
    viewBox="0 0 24 24"
    // {...props.rest}
    className={`w-full h-auto ${props.className}`}
    >
    <path fill="none" stroke="#cacaca" stroke-linecap="round" stroke-linejoin="round" d="M8 12h8M9 8H6a4 4 0 1 0 0 8h3m6-8h3a4 4 0 0 1 0 8h-3"/>
    </svg>
}