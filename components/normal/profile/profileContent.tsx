import { ChangeLink } from './utils'

interface ProfileInputProps {
    label: string
    value: string
    placeholder: string
}

const ProfileInput: React.FC<ProfileInputProps> = ({ label, value, placeholder }) => (
    <div className="p-3 sm:p-4 rounded-lg bg-neutral-200 flex flex-col justify-center min-h-[56px] sm:min-h-[60px]">
        <span className="text-xs text-gray-500 mb-0.5">{label}</span>
        <span className="text-sm font-medium text-gray-800 break-all">{value}</span>
        {/* Hidden input for actual form if this were a real editable form */}
        <input type="hidden" defaultValue={value} />
    </div>
)

const ProfileContent: React.FC = () => {
    return (
        <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 items-center">
                {/* Full Name */}
                <ProfileInput label="Your full name" value="MARKEYLLA ATIM" placeholder="Enter your full name" />
                <div className="justify-self-start lg:justify-self-end">
                    <ChangeLink text="CHANGE NAME" />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 items-center">
                {/* Email */}
                <ProfileInput label="Your E-mail" value="atimalkey@gmail.com" placeholder="Enter your email" />
                <div className="hidden lg:block">{/* Placeholder for alignment */}</div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 items-center">
                {/* Password */}
                <ProfileInput label="Your password" value="********" placeholder="Enter new password" />
                <div className="justify-self-start lg:justify-self-end">
                    <ChangeLink text="CHANGE PASSWORD" />
                </div>
            </div>
        </div>
    )
}

export default ProfileContent