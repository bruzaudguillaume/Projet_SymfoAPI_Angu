<?php

namespace App\DataFixtures;

use App\Entity\Artist;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // Create artists
        $artist = new Artist();
        $artist->setName("Earth Wind & Fire");
        $artist->setYearOfBirth(1969);
        $manager->persist($artist); // save artist

        $artist = new Artist();
        $artist->setName("Kool & The Gang");
        $manager->persist($artist);

        $manager->flush(); // transction to the database
    }

}
