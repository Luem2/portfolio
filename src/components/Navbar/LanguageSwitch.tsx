import { useState, useContext, useEffect } from 'react'
import { Image } from '@nextui-org/react'

import { LangContext } from '../../context/langContext'
import { spainSVG, usaSVG } from '../../assets'
import { CV_ENGLISH, CV_SPANISH } from '../../constants'
import { useStore } from '../../store/useStore'

export function LanguageSwitch() {
    const { locale, setLang } = useContext(LangContext)
    const { setCvLang } = useStore()
    const [langImg, setLangImg] = useState()

    const toggleLang = () => {
        if (locale === 'es-MX') {
            setLang('en-US')
            setCvLang(CV_ENGLISH)
            setLangImg(usaSVG.src)
        } else {
            setLang('es-MX')
            setCvLang(CV_SPANISH)
            setLangImg(spainSVG.src)
        }
    }

    useEffect(() => {
        if (window.localStorage.getItem('lang') === null) {
            window.localStorage.setItem('lang', 'en-US')
            setCvLang(CV_ENGLISH)
            setLangImg(usaSVG.src)

            return
        }

        if (window.localStorage.getItem('lang') === 'es-MX') {
            setLangImg(spainSVG.src)
            setCvLang(CV_SPANISH)
        } else {
            setLangImg(usaSVG.src)
            setCvLang(CV_ENGLISH)
        }
    }, [langImg, setCvLang])

    return (
        <Image
            alt={`${locale}-logo`}
            css={{
                '&:hover': {
                    cursor: 'pointer',
                },
            }}
            height={25}
            src={langImg}
            width={25}
            onClick={() => toggleLang()}
        />
    )
}
