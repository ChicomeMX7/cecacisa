import { FC, useState } from 'react'
import { Container, Input, Slider, Switch } from './ToggleButton.styles'
import { colors } from 'styles/colors'

type ToggleButtonProps = {
    featureLabel?: string
    disabled?: boolean
    isOn: boolean
    setter: () => void
}

export const ToggleButton: FC<ToggleButtonProps> = ({
    featureLabel,
    isOn = false,
    disabled,
    setter,
}) => {
    const [active, setActive] = useState<boolean>(isOn || false)
    const handleToggle = () => {
        setActive((prev) => !prev)
        setter()
    }

    // useEffect(() => {
    //     setter(active)
    // }, [active])

    return (
        <Container>
            {featureLabel && <label>{featureLabel}</label>}
            <Switch>
                <Input onClick={handleToggle} />
                <Slider
                    css={
                        active
                            ? {
                                  'backgroundColor': `${colors.PRIMARY}${disabled ? '65' : ''}`,
                                  'boxShadow': `0 0 0 1px ${colors.PRIMARY}${disabled ? '65' : ''}`,
                                  '&::before': {
                                      backgroundColor: `${colors.LIGHT}`,
                                      transform: 'translateX(1.5em)',
                                  },
                              }
                            : {
                                  'backgroundColor': `${colors.LIGHT}${disabled ? '65' : ''}`,
                                  '&::before': {
                                      backgroundColor: `${colors.PRIMARY}${disabled ? '65' : ''}`,
                                  },
                              }
                    }
                />
            </Switch>
        </Container>
    )
}
