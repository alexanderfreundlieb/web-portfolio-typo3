<?php
defined('TYPO3') or die();

$fields = [
    'gradient_color' => [
        'exclude' => 1,
        'label' => 'LLL:EXT:af6passenger/Resources/Private/Language/locallang_db.xlf:tca.tx_news_domain_model_news.gradient-color',
        'description' => 'LLL:EXT:af6passenger/Resources/Private/Language/locallang_db.xlf:tca.tx_news_domain_model_news.gradient-color.description',
        'config' => [
            'type' => 'select',
            'renderType' => 'selectSingle',
            'items' => [
                [
                    'label' => 'LLL:EXT:af6passenger/Resources/Private/Language/locallang_db.xlf:tca.tx_news_domain_model_news.gradient-color.default',
                    'value' => 'default'
                ],
                [
                    'label' => 'LLL:EXT:af6passenger/Resources/Private/Language/locallang_db.xlf:tca.tx_news_domain_model_news.gradient-color.blue',
                    'value' => 'blue'
                ],
                [
                    'label' => 'LLL:EXT:af6passenger/Resources/Private/Language/locallang_db.xlf:tca.tx_news_domain_model_news.gradient-color.purple',
                    'value' => 'purple'
                ],
                [
                    'label' => 'LLL:EXT:af6passenger/Resources/Private/Language/locallang_db.xlf:tca.tx_news_domain_model_news.gradient-color.taupe',
                    'value' => 'taupe'
                ],
            ],
            'default' => 'default'
        ],
    ]
];

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns(
    'tx_news_domain_model_news',
    $fields
);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes(
    'tx_news_domain_model_news',
    'gradient_color',
    '',
    'after:istopnews'
);
