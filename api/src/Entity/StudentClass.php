<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use App\Repository\StudentClassRepository;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: StudentClassRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['retrieve', 'read:sc']]
)]
class StudentClass
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(targetEntity: Group::class,  inversedBy: 'studentClass')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['retrieve'])]
    private ?Group $class_group = null;

    #[ORM\ManyToOne(targetEntity: Level::class, inversedBy: 'studentClass')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['retrieve'])]
    private ?Level $level = null;

    /**
     * @return integer|null
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Group|null
     */
    public function getClassGroup(): ?Group
    {
        return $this->class_group;
    }

    /**
     * @param Group|null $class_group
     * @return static
     */
    public function setClassGroup(?Group $class_group): static
    {
        $this->class_group = $class_group;

        return $this;
    }

    /**
     * @return Level|null
     */
    public function getLevel(): ?Level
    {
        return $this->level;
    }

    /**
     * @param Level|null $level
     * @return static
     */
    public function setLevel(?Level $level): static
    {
        $this->level = $level;

        return $this;
    }
}
