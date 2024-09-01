<?php

declare(strict_types=1);

namespace AlexanderFreundlieb\Af6passenger\Domain\Model;

class News extends \GeorgRinger\News\Domain\Model\News
{
    /**
     * @var string
     */
    protected string $gradientColor;

    /**
     * @return string
     */
    public function getGradientColor(): string
    {
        return $this->gradientColor;
    }

    /**
     * @param string
     */
    public function setGradientColor(string $gradientColor)
    {
        $this->gradientColor = $gradientColor;
    }
}
