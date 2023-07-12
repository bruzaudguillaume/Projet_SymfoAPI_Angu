<?php

namespace App\Controller;

use App\Entity\Artist;
use App\Repository\ArtistRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\SerializerInterface;

class ArtistController extends AbstractController
{
    #[Route('/api/artists', name: 'artists', methods: ['GET'])]
    public function getArtistList(ArtistRepository $artistRepository, SerializerInterface $serializer): JsonResponse
    {
        $artistList = $artistRepository->findAll();
        $jsonArtistList = $serializer->serialize($artistList, 'json');
        return new JsonResponse($jsonArtistList, Response::HTTP_OK, [], true);
    }

    #[Route('/api/artists/{id}', name: 'artist', methods: ['GET'])]
    public function getArtistById(Artist $artist, SerializerInterface $serializer): JsonResponse 
    {
        $jsonArtist = $serializer->serialize($artist, 'json');
        return new JsonResponse($jsonArtist, Response::HTTP_OK, [], true);
    }

    #[Route('/api/artists/{id}', name: 'deleteArtist', methods: ['DELETE'])]
    public function deleteArtist(Artist $artist, EntityManagerInterface $em): JsonResponse 
    {
        $em->remove($artist);
        $em->flush();
        return new JsonResponse(null, Response::HTTP_NO_CONTENT);
    }

    #[Route('/api/artists', name:"createArtist", methods: ['POST'])]
    public function createArtist(Request $request, SerializerInterface $serializer, EntityManagerInterface $em, 
        UrlGeneratorInterface $urlGenerator): JsonResponse 
    {
        $artist = $serializer->deserialize($request->getContent(), Artist::class, 'json'); // get artist object

        $em->persist($artist); // save artist
        $em->flush(); // confirm

        $jsonArtist = $serializer->serialize($artist, 'json');

        $location = $urlGenerator->generate('artist', ['id' => $artist->getId()], UrlGeneratorInterface::ABSOLUTE_URL); // indicate url of the created artist

        return new JsonResponse($jsonArtist, Response::HTTP_CREATED, ["Location" => $location], true);
   }

   #[Route('/api/artists/{id}', name:"updateArtist", methods:['PUT'])]

   public function updateBook(Request $request, SerializerInterface $serializer, Artist $currentArtist, EntityManagerInterface $em): JsonResponse 
   {
       $updatedArtist = $serializer->deserialize($request->getContent(), 
               Artist::class, 
               'json', 
               [AbstractNormalizer::OBJECT_TO_POPULATE => $currentArtist]);
       
       $em->persist($updatedArtist);
       $em->flush();

       return new JsonResponse(null, JsonResponse::HTTP_NO_CONTENT);
  }
}