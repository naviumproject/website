export default function Quote({author, authorDesc, children}:{author:React.ReactNode,authorDesc?:React.ReactNode,children:any}){
    return (
        <div className="">
            {children}
            <span> ー {author}{authorDesc && `, ${authorDesc}`}</span>
        </div>
    )
}