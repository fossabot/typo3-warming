<?php

declare(strict_types=1);

/*
 * This file is part of the TYPO3 CMS extension "warming".
 *
 * Copyright (C) 2021 Elias Häußler <elias@haeussler.dev>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 */

namespace EliasHaeussler\Typo3Warming\Traits;

use EliasHaeussler\Typo3Warming\Configuration\Extension;
use TYPO3\CMS\Extbase\Utility\LocalizationUtility;

/**
 * TranslatableTrait
 *
 * @author Elias Häußler <elias@haeussler.dev>
 * @license GPL-2.0-or-later
 */
trait TranslatableTrait
{
    /**
     * @param string $key
     * @param mixed[] $arguments
     * @return string|null
     */
    protected static function translate(string $key, array $arguments = []): ?string
    {
        return LocalizationUtility::translate($key, Extension::NAME, $arguments);
    }
}
