import {type ReactElement} from "react";
import {Alert} from "@mui/material";
import SpriteIcon from "@components/SpriteIcon";
import "./style.css";

export type TNotificationTypes = "warning" | "info";

type label = string;
type list = (string | number)[];

//тип для определения маркированности, нумерованности или отсутсвия маркеров
type listTypes = "none" | "mark" | "number"

type widthTypes = 'small' | 'middle' | 'large';

export interface IFlexibleAlertProps {
    content: list | label;
    listMark?: listTypes;
    type?: TNotificationTypes;
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
    borderRadius?: number;
    iconName?: string;
    iconSize?: string;
    iconColor?: string;
    fullWidth?: boolean;
    cardWidth?: widthTypes;
}

export enum NotificationBackgroundColors {
    beige = "#FEFCF3",
    lightSand = "#EBCD91",
}

export enum NotificationTypes {
    warning = "warning",
    info = "info",
}

const DEFAULT_ICON_SIZE: string = "19px";

const DSNotification = ({
    content,
    listMark = "none",
    type=NotificationTypes.warning,
    backgroundColor=NotificationBackgroundColors.beige,
    textColor="black",
    borderColor=NotificationBackgroundColors.lightSand,
    borderRadius = 6,
    iconName="warningIcon",
    iconSize=DEFAULT_ICON_SIZE,
    iconColor="#BD7D22",
    fullWidth=false,
    cardWidth,
}: IFlexibleAlertProps): ReactElement => {
    const dsBorderColor = borderColor ? borderColor : backgroundColor;

    const isArray = Array.isArray(content);

    const widthSizes = {
        'small': 387,
        'middle': 500,
        'large': 692,
    }
    
    const currentWidth = cardWidth != undefined ? widthSizes[cardWidth] : undefined

    return (
        <div
            className="ds-notification"
            style={{
                width: fullWidth ? "100%" : `${currentWidth}px`,
                border: `1px solid ${dsBorderColor}`,
                borderRadius: `${borderRadius}px`,
            }}
        >
            <Alert
                className={`ds-mui-alert ds-alert-${type}`}
                // использовала style вместо sx, так как borderRadius не работал с sx
                style={{
                    backgroundColor: backgroundColor,
                    color: textColor,
                    width: fullWidth ? "100%" : "auto",
                    borderRadius: `${borderRadius}px`,
                }}
                icon={<SpriteIcon iconId={iconName} size={iconSize} color={iconColor}/>}
                
            >
                {!isArray && content}

                {isArray && (listMark != 'mark' || 'none') && (listMark === 'number') &&
                    <ol className="list">
                        {content.map ((item) => 
                            <li key={item}> {item} </li>
                        )}
                    </ol>
                }
                
                {isArray && (listMark === 'mark' || 'none' ) && (listMark != 'number') &&
                    <ul className={`list ${listMark === 'none'?  'mark-none' : ''}`}>
                        {content.map ((item) => 
                            <li key={item}> {item} </li>
                        )}
                    </ul>
                }
            </Alert>
        </div>
    );
};

export default DSNotification;

/* Что нужно сделать:
1. позиционирование SVG картинки: flex-start, center, flex-end
2. border
3. SVG size
4. Paddings
5. Font-size
6. Расстояние между текстом и картинкой(27, 10, 24 пикселя)
*/