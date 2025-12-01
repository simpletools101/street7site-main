'use client'
import React, { useState, useMemo } from 'react'
import { Plus, Minus } from 'lucide-react'

// --- Types and Data ---
type FaqItem = {
    id: string
    question: string
    answer: string
    tab: string
}

const FAQS_DATA: FaqItem[] = [
    // Left Column
    {
        id: '1',
        question: 'That frequently asked question',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, al.',
        tab: 'SHIPPING',
    },
    {
        id: '2',
        question: 'That frequently asked question',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, al.',
        tab: 'SHIPPING',
    },
    {
        id: '3',
        question: 'That frequently asked question',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, al.',
        tab: 'SHIPPING',
    },
    {
        id: '4',
        question: 'That frequently asked question',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, al.',
        tab: 'SHIPPING',
    },
    // Right Column
    {
        id: '5',
        question: 'That frequently asked question',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, al.',
        tab: 'SHIPPING',
    },
    {
        id: '6',
        question: 'That frequently asked question',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, al.',
        tab: 'SHIPPING',
    },
    {
        id: '7',
        question: 'That frequently asked question',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, al.',
        tab: 'SHIPPING',
    },
]

const TABS = ['SHIPPING', 'RETURNS', 'PRICES', 'ORDERING', 'PAYMENTS']

// Define the custom gold color
const ACCENT_COLOR = '#fec000'

// --- Reusable Accordion Component ---
interface AccordionItemProps {
    item: FaqItem
    isOpen: boolean
    onToggle: () => void
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isOpen, onToggle }) => {
    const borderStyle = isOpen ? { borderTop: `1px solid ${ACCENT_COLOR}` } : {}
    const initialClass = ['3', '6'].includes(item.id) ? 'bg-stone-50' : 'bg-neutral-200'

    return (
        <div className={`mb-3 sm:mb-4 ${initialClass} overflow-hidden transition-all duration-300`}>
            <button
                className="flex justify-between items-center w-full p-3 sm:p-4 text-left font-medium text-gray-800"
                onClick={onToggle}
                aria-expanded={isOpen}
            >
                <span className="text-sm sm:text-base pr-4">{item.question}</span>
                <div
                    className="p-1 rounded-full text-white flex items-center justify-center flex-shrink-0 transition-transform duration-200"
                    style={{ backgroundColor: ACCENT_COLOR }}
                >
                    {isOpen ? (
                        <Minus size={14} className="sm:w-4 sm:h-4" />
                    ) : (
                        <Plus size={14} className="sm:w-4 sm:h-4" />
                    )}
                </div>
            </button>
            {/* Content Area */}
            <div
                className={`transition-all duration-500 overflow-hidden ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
                style={borderStyle}
            >
                <div className="p-3 sm:p-4 pt-2 sm:pt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                    {item.answer}
                </div>
            </div>
        </div>
    )
}

// --- Main Application Component ---
export default function Faq() {
    const [activeTab, setActiveTab] = useState('SHIPPING')
    const [openItemIds, setOpenItemIds] = useState<string[]>(['3', '6'])

    const handleToggle = (id: string) => {
        setOpenItemIds((prevIds) =>
            prevIds.includes(id) ? prevIds.filter((itemId) => itemId !== id) : [...prevIds, id]
        )
    }

    const filteredFaqs = useMemo(() => FAQS_DATA.filter((faq) => faq.tab === activeTab), [activeTab])

    // Split the filtered data into two columns for the grid layout
    const splitIndex = Math.ceil(filteredFaqs.length / 2)
    const leftColumn = filteredFaqs.slice(0, splitIndex)
    const rightColumn = filteredFaqs.slice(splitIndex)

    return (
        <div className="min-h-screen bg-white p-4 sm:p-6 md:p-8 lg:p-16">
            <div className="max-w-6xl mx-auto">
                {/* Title */}
                <h1 className="text-3xl tb sm:text-4xl md:text-3xl lg:text-4xl mb-8 sm:mb-10 lg:mb-12 text-gray-900 leading-tight">
                    Frequently Asked Questions
                </h1>

                {/* Navigation Tabs */}
                <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 lg:space-x-8 mb-8 sm:mb-10 lg:mb-12 border-b-2 border-gray-100 overflow-x-auto">
                    {TABS.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-2 sm:pb-3 uppercase text-xs sm:text-sm font-semibold transition-all duration-150 relative whitespace-nowrap ${
                                tab === activeTab ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            {tab}
                            {tab === activeTab && (
                                <div
                                    className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1"
                                    style={{ backgroundColor: ACCENT_COLOR }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* FAQ Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 lg:gap-x-8">
                    {/* Left Column */}
                    <div>
                        {leftColumn.map((item) => (
                            <AccordionItem
                                key={item.id}
                                item={item}
                                isOpen={openItemIds.includes(item.id)}
                                onToggle={() => handleToggle(item.id)}
                            />
                        ))}
                    </div>
                    {/* Right Column */}
                    <div>
                        {rightColumn.map((item) => (
                            <AccordionItem
                                key={item.id}
                                item={item}
                                isOpen={openItemIds.includes(item.id)}
                                onToggle={() => handleToggle(item.id)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
