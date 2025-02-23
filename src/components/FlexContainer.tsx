import styled, { CSSProperties } from 'styled-components';

type FlexProps = {
	flexDirection?: CSSProperties['flexDirection'];
	justifyContent?: CSSProperties['justifyContent'];
	alignItems?: CSSProperties['alignItems'];
	flexWrap?: CSSProperties['flexWrap'];
	gap?: CSSProperties['gap'];
	width?: CSSProperties['width'];
	maxWidth?: CSSProperties['maxWidth'];
};

type FlexContainerProps = {
	children?: JSX.Element | string;
} & FlexProps;

const Flex = styled.div<FlexProps>`
	position: relative;
	display: flex;

	${({ flexDirection, justifyContent, alignItems, flexWrap, gap, width }) => `
	justify-content: ${justifyContent || 'center'};
	align-items: ${alignItems || 'flex-start'}; 
    width: ${width || 'auto'};
    flex-direction: ${flexDirection || 'row'};
    flex-wrap: ${flexWrap || 'wrap'};
    gap: ${gap || 30}px;
    `}
`;

const FlexContainer = ({ children, ...props }: FlexContainerProps) => (
	<Flex {...props}>{children}</Flex>
);

export default FlexContainer;
