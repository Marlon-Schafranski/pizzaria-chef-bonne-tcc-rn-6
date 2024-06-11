import { Link, LinkProps } from "expo-router";


type LinkButtonProps = LinkProps<String> & {
    title : String

}
export function LinkButton({title,...rest} : LinkButtonProps){

    return (

        <Link className="text-blue-500 text-center text-base font-body" {...rest}>
            {title}
        </Link>
    )
}