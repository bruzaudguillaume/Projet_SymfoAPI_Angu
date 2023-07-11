<?php

namespace App\Controller;

use App\Repository\ArtistRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class ArtistController extends AbstractController
{
    #[Route('/api/artists', name: 'artist', methods: ['GET'])]
    public function getArtistList(ArtistRepository $artistRepository, SerializerInterface $serializer): JsonResponse
    {
        $artistList = $artistRepository->findAll();
        // $jsonArtistList = $serializer->serialize($artistList, 'json');
        return $this->json($artistList, Response::HTTP_OK);
    }
}
