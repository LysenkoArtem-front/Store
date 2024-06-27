import { FC, useState } from 'react';
import { ButtonFull } from './description.style';

interface descriptionProps {
    text: string;
    maxLength?: number;
}

export const Descriotion: FC<descriptionProps> = ({ text, maxLength = 150 }) => {
    const [showFullText, setShowFullText] = useState(false);

    const truncatedText = text.substring(0, maxLength);
    const shouldTruncate = text.length > maxLength;

    const toggleShowFullText = () => {
        setShowFullText(!showFullText);
    };
    return (
        <div>
            {shouldTruncate ? (
                <>
                    {showFullText ? (
                        <>
                            {text} <ButtonFull onClick={toggleShowFullText}>Hide Details</ButtonFull>
                        </>
                    ) : (
                        <>
                            {truncatedText}... <ButtonFull onClick={toggleShowFullText}>Show Details</ButtonFull>
                        </>
                    )}
                </>
            ) : (
                <>{text}</>
            )}
        </div>
    );
};
