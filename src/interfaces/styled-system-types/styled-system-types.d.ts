type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

type ColorProps = PartialRecord<'color' | 'bg', string>;

type TypographyProps = PartialRecord<
  | 'fontSize'
  | 'fontFamily'
  | 'textAlign'
  | 'lineHeight'
  | 'fontWeight'
  | 'letterSpacing',
  string
>;

type LayoutProps = PartialRecord<
  | 'width'
  | 'height'
  | 'minWidth'
  | 'maxWidth'
  | 'minHeight'
  | 'maxHeight'
  | 'display'
  | 'size'
  | 'overflowX'
  | 'overflowY',
  string
>;

type FlexboxProps = PartialRecord<
  | 'alignItems'
  | 'alignContent'
  | 'justifyContent'
  | 'flexWrap'
  | 'flexBasis'
  | 'flexDirection'
  | 'flex'
  | 'justifySelf'
  | 'alignSelf'
  | 'order',
  string
>;

type BackgroundProps = PartialRecord<
  | 'backgroundImage'
  | 'backgroundSize'
  | 'backgroundPosition'
  | 'backgroundRepeat',
  string
>;

type PositionProps = PartialRecord<
  'position' | 'zIndex' | 'top' | 'bottom' | 'left' | 'right',
  string
>;

type ShadowProps = PartialRecord<'textShadow' | 'boxShadow', string>;

type SpaceProps = PartialRecord<
  | 'm'
  | 'mt'
  | 'mr'
  | 'mb'
  | 'ml'
  | 'mx'
  | 'my'
  | 'p'
  | 'pt'
  | 'pr'
  | 'pb'
  | 'pl'
  | 'px'
  | 'py',
  string
>;
