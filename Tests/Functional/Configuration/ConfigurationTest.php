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

namespace EliasHaeussler\Typo3Warming\Tests\Functional\Configuration;

use EliasHaeussler\Typo3Warming\Configuration\Configuration;
use EliasHaeussler\Typo3Warming\Configuration\Extension;
use TYPO3\CMS\Core\Configuration\ExtensionConfiguration;
use TYPO3\CMS\Core\Information\Typo3Version;
use TYPO3\CMS\Extbase\Security\Cryptography\HashService;
use TYPO3\TestingFramework\Core\Functional\FunctionalTestCase;

/**
 * ConfigurationTest
 *
 * @author Elias Häußler <elias@haeussler.dev>
 * @license GPL-2.0-or-later
 */
class ConfigurationTest extends FunctionalTestCase
{
    protected $testExtensionsToLoad = [
        'typo3conf/ext/warming',
    ];

    /**
     * @var string
     */
    protected $backedUpEncryptionKey;

    /**
     * @var array<string, mixed>
     */
    protected $backedUpExtensionConfiguration;

    /**
     * @var ExtensionConfiguration
     */
    protected $extensionConfiguration;

    /**
     * @var Configuration
     */
    protected $subject;

    protected function setUp(): void
    {
        parent::setUp();

        $GLOBALS['TYPO3_CONF_VARS']['SYS']['encryptionKey'] = '0b84531802b4bff53a8cc152b8c5b9965fb33deb897a60130349109fbcb6f7d39e5d125d6d27a89b6e16b66a811fca42';

        $this->backedUpEncryptionKey = $GLOBALS['TYPO3_CONF_VARS']['SYS']['encryptionKey'];
        $this->backedUpExtensionConfiguration = $GLOBALS['TYPO3_CONF_VARS']['EXTENSIONS'][Extension::KEY];
        $this->extensionConfiguration = new ExtensionConfiguration();
        $this->extensionConfiguration->synchronizeExtConfTemplateWithLocalConfiguration(Extension::KEY);
        $this->subject = new Configuration($this->extensionConfiguration, new HashService());
    }

    /**
     * @test
     */
    public function getLimitReturnsDefaultLimitIfNoLimitIsSet(): void
    {
        $this->setExtensionConfiguration();

        self::assertSame(250, $this->subject->getLimit());
    }

    /**
     * @test
     */
    public function getLimitReturnsAbsoluteValue(): void
    {
        $this->setExtensionConfiguration(['limit' => -1]);

        self::assertSame(1, $this->subject->getLimit());
    }

    /**
     * @test
     */
    public function getLimitReturnsDefinedLimit(): void
    {
        $this->setExtensionConfiguration(['limit' => 350]);

        self::assertSame(350, $this->subject->getLimit());
    }

    /**
     * @test
     */
    public function getCrawlerReturnsDefaultCrawlerIfNoCrawlerIsSet(): void
    {
        $this->setExtensionConfiguration();

        self::assertNull($this->subject->getCrawler());
    }

    public function getCrawlerReturnsNullIfDefinedCrawlerIsEmpty(): void
    {
        $this->setExtensionConfiguration(['crawler' => '']);

        self::assertNull($this->subject->getCrawler());
    }

    /**
     * @test
     */
    public function getCrawlerReturnsDefinedCrawler(): void
    {
        $this->setExtensionConfiguration(['crawler' => 'foo']);

        self::assertSame('foo', $this->subject->getCrawler());
    }

    /**
     * @test
     */
    public function getUserAgentReturnsCorrectlyGeneratedUserAgent(): void
    {
        $expected = 'TYPO3/tx_warming_crawler2cdfe0c134f3796954daf9395c034c39b542ca57';

        self::assertSame($expected, $this->subject->getUserAgent());
    }

    /**
     * @test
     */
    public function getAllReturnsCompleteExtensionConfiguration(): void
    {
        $this->setExtensionConfiguration(['crawler' => 'foo', 'limit' => 'baz']);

        self::assertSame(['crawler' => 'foo', 'limit' => 'baz'], $this->subject->getAll());
    }

    /**
     * @param array<string, mixed>|null $configuration
     */
    private function setExtensionConfiguration(array $configuration = null): void
    {
        $typo3Version = new Typo3Version();

        if ($configuration === null) {
            $this->extensionConfiguration->set(Extension::KEY);
            return;
        }

        if ($typo3Version->getMajorVersion() > 10) {
            $this->extensionConfiguration->set(Extension::KEY, $configuration);
            return;
        }

        foreach ($configuration as $key => $value) {
            /** @noinspection PhpMethodParametersCountMismatchInspection */
            /** @phpstan-ignore-next-line */
            $this->extensionConfiguration->set(Extension::KEY, $key, $value);
        }
    }

    protected function tearDown(): void
    {
        $GLOBALS['TYPO3_CONF_VARS']['SYS']['encryptionKey'] = $this->backedUpEncryptionKey;
        $GLOBALS['TYPO3_CONF_VARS']['EXTENSIONS'][Extension::KEY] = $this->backedUpExtensionConfiguration;

        parent::tearDown();
    }
}