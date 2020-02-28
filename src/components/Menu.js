import React, { useState } from 'react';
import PropTypes from 'prop-types';

const MenuItem = ({
	alignItems = 'center',
	children,
	justifyContent = 'flex-start',
}) => {
	const justifyContentValues = [
		'start',
		'center',
		'space-between',
		'space-around',
		'space-evenly',
		'flex-start',
		'flex-end',
	];

	const validatedProps = {
		justifyContent:
			justifyContentValues.indexOf(justifyContent) !== -1
				? justifyContent
				: 'flex-start',
	};

	return (
		<div
			className="menu-item"
			style={{
				alignItems,
				display: 'flex',
				justifyContent: validatedProps.justifyContent,
				padding: '1em',
			}}
		>
			{children}
		</div>
	);
};

MenuItem.propTypes = {
	alignItems: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
	justifyContent: PropTypes.string,
};
export { MenuItem };

const Menu = ({
	alignment = 'right',
	transition = '.5s',
	menuBackground = 'white',
	visible = false,
	width = '50%',
	zIndex = 100,
	children
}) => {
	// const [visibility, setVisibility] = useState(visible);
	var visibility = visible;
	const props = {
		alignment: alignment === 'right' ? 'right' : 'left',
	};
	// const hideMenu = () => {
	// 	setVisibility(false);
	// };

	const styles = {
		backgroundColor: menuBackground,
		boxShadow: visibility
			? '0 0 2em rgba(0, 0, 0, .25)'
			: '0 0 2em rgba(0, 0, 0, 0)',
		height: '100%',
		position: 'fixed',
		top: 0,
		transform: 'translate3d(-100%, 0, 0)',
		transition: `transform ${transition}`,
		width,
		zIndex: zIndex + 2,
	};
	if (props.alignment === 'right') {
		styles.right = 0;
		styles.transform = 'translate3d(100%, 0, 0)';
	} else {
		styles.left = 0;
	}
	if (visibility) styles.transform = 'translate3d(0, 0, 0)';
	return (
		<div className="menu-container" data-visible={visibility}>
			<div
				className="menu-background"
				style={{
					backgroundColor: 'rgba(0, 0, 0, .25)',
					height: '100%',
					left: '0',
					opacity: visibility ? '1' : '0',
					position: 'fixed',
					top: '0',
					transition: `opacity ${transition}, visibility ${transition}`,
					visibility: visibility ? 'visible' : 'hidden',
					width: '100%',
					zIndex: zIndex + 1,
				}}
			>
				<button
					className="menu-close-button"
					style={{
						appearance: 'none',
						border: '0',
						boxSizing: 'border-box',
						backgroundColor: 'transparent',
						cursor: 'pointer',
						height: '100%',
						padding: 0,
						width: '100%',
					}}
					// onClick={hideMenu}
				>
					<span
						style={{
							clipPath: 'inset(50%)',
							height: '1px',
							margin: '-1px',
							overflow: 'hidden',
							padding: 0,
							position: 'absolute',
							width: '1px',
							wordWrap: 'normal',
						}}
					>
						Close menu
					</span>
				</button>
			</div>
			<div className="menu-foreground" style={styles}>
				{children}
			</div>
		</div>
	);
};
Menu.propTypes = {
	alignment: PropTypes.string,
	menuBackground: PropTypes.string,
	transition: PropTypes.string,
	visible: PropTypes.bool,
	width: PropTypes.string,
	zIndex: PropTypes.number,
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};
export { Menu };