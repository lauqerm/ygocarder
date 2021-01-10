export type ExtractProps<TComponentOrTProps> =
  TComponentOrTProps extends React.ComponentType<infer TProps>
    ? TProps
    : TComponentOrTProps;