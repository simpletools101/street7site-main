interface ILanguageXRProps {
    language: 'ENG' | 'GER' | 'ESPAN'
}

export default function LanguageXR() {
    return (
        <div className="flex space-x-2 items-center">
            <span>🇬🇧</span>
            <span className="font-semibold text-sm">ENG</span>
        </div>
    )
}
