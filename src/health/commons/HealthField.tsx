import { Stack, TextField } from "@fluentui/react";




export const HealthField = (props)=>{

    const {names,gap,type} = props;

        const textItems = ()=>{
            return(
                    names.map((a,b)=>{
                        return(
                        <Stack.Item grow key={b} >
                            <TextField  label={a} />
                        </Stack.Item>
                )
            })

            );
        }
            

    return(
        type === "H"?
        <Stack horizontal tokens={{childrenGap : gap}} >
            {textItems()}
        </Stack>:
        <Stack tokens={{childrenGap : gap}} >
            {textItems()}
        </Stack>
    )
         
    }
    

    

 



