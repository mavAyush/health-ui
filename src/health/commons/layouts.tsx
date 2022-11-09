import { getTheme, Stack } from '@fluentui/react';
import { FontSizes } from '@fluentui/theme';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import { Icon } from '@fluentui/react/lib/Icon';



type NavProps={
    content : Array<String>
}

initializeIcons();


const MyIcon = () => <Icon iconName="HomeSolid" />;

const theme = getTheme();

const navlayout= { 
    fontSize: FontSizes.size20,
    padding:20 ,
    boxShadow: theme.effects.elevation8,
    cursor:'pointer',
 }




export const InnerLayout = (props :NavProps)=>{
    const {content}= props;
        return(
            <div style={{ boxShadow: theme.effects.elevation16, padding:15 }}>

                {content}
            </div>
        );
}

export const NavLayout = (props :any)=>{
    const {content}= props;
        return(
            <Stack horizontal  style={{ boxShadow: theme.effects.elevation64 ,backgroundColor:'tomato',color:'white'  }}>
                <Stack.Item  style={navlayout}  ><MyIcon /></Stack.Item>
                {content}
            </Stack>
        );
}
export const NavBar=(props :NavProps)=>{
    const {content} =props;
    const layoutContent = content.map((a,b)=>{
        return(
            <Stack.Item grow key={b} style={navlayout}  >
                {a}
            </Stack.Item>
        )
    })

    return(
        <NavLayout content={layoutContent}/>
    );
}